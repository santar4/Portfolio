from django.contrib import admin
from .models import Certificate, ContactRequest


@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ("title", "is_active", "order", "created_at")
    list_editable = ("is_active", "order")
    ordering = ("order", "-created_at")

@admin.register(ContactRequest)
class ContactRequestAdmin(admin.ModelAdmin):
    list_display = ("name", "contact", "created_at", "is_processed")
    list_filter = ("is_processed", "created_at")
    search_fields = ("name", "contact", "message")
