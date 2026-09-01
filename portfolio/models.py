
from django.db import models
from cloudinary.models import CloudinaryField


class Certificate(models.Model):
    title = models.CharField(
        max_length=200,
        verbose_name="Назва"
    )

    description = models.TextField(
        verbose_name="Опис"
    )

    image = CloudinaryField(
        verbose_name="Зображення сертифіката",
        folder="portfolio/certificates"
    )

    pdf = CloudinaryField(
        verbose_name="PDF сертифіката",
        resource_type="raw",
        folder="portfolio/certificates",
        blank=True,
        null=True
    )

    is_active = models.BooleanField(
        default=True,
        verbose_name="Показувати"
    )

    order = models.PositiveIntegerField(
        default=0,
        verbose_name="Порядок"
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Дата створення"
    )

    class Meta:
        ordering = ["order", "-created_at"]
        verbose_name = "Сертифікат"
        verbose_name_plural = "Сертифікати"


    def __str__(self):
        return self.title

class ContactRequest(models.Model):
    name = models.CharField("Ім'я", max_length=150)
    contact = models.CharField("Email або Telegram", max_length=150)
    message = models.TextField("Повідомлення")
    created_at = models.DateTimeField("Дата створення", auto_now_add=True)
    is_processed = models.BooleanField("Опрацьовано", default=False)

    class Meta:
        verbose_name = "Заявка з контактної форми"
        verbose_name_plural = "Заявки з контактної форми"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} ({self.contact}) — {self.created_at:%d.%m.%Y %H:%M}"