import requests

from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_protect

from .models import Certificate, ContactRequest


def index(request):
    certificates = Certificate.objects.filter(
        is_active=True
    )

    return render(
        request,
        "portfolio/index.html",
        {
            "certificates": certificates,
        }
    )


def send_telegram_notification(contact_request):
    text = (
        f"📩 Нова заявка з сайту\n\n"
        f"Ім'я: {contact_request.name}\n"
        f"Контакт: {contact_request.contact}\n"
        f"Повідомлення:\n{contact_request.message}"
    )

    url = (
        f"https://api.telegram.org/"
        f"bot{settings.TELEGRAM_BOT_TOKEN}/sendMessage"
    )

    try:
        response = requests.post(
            url,
            data={
                "chat_id": settings.TELEGRAM_CHAT_ID,
                "text": text,
            },
            timeout=10,
        )

        print("Telegram status:", response.status_code)
        print("Telegram response:", response.text)

        response.raise_for_status()

    except requests.RequestException as e:
        print("Telegram error:", e)

@csrf_protect
@require_POST
def contact_submit(request):
    name = request.POST.get("name", "").strip()
    contact = request.POST.get("contact", "").strip()
    message = request.POST.get("message", "").strip()

    if not name or not contact or not message:
        return JsonResponse(
            {
                "ok": False,
                "error": "Заповніть усі поля"
            },
            status=400
        )

    contact_request = ContactRequest.objects.create(
        name=name,
        contact=contact,
        message=message,
    )

    send_telegram_notification(contact_request)

    return JsonResponse({
        "ok": True,
        "redirect_url": "/thanks/"
    })


def thanks(request):
    return render(request, "portfolio/thanks.html")