
from django.contrib import admin
from .models import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "category",
        "date",
        "start_time",
        "location",
        "status",
        "is_published",
    )

    list_filter = (
        "category",
        "status",
        "is_published",
        "date",
    )

    search_fields = (
        "title",
        "description",
        "location",
    )

    ordering = (
        "date",
        "start_time",
    )

    list_editable = (
        "is_published",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    fieldsets = (
        (
            "Event information",
            {
                "fields": (
                    "title",
                    "description",
                    "category",
                ),
            },
        ),
        (
            "Date and location",
            {
                "fields": (
                    "date",
                    "start_time",
                    "end_time",
                    "location",
                    "address",
                ),
            },
        ),
        (
            "Participation",
            {
                "fields": (
                    "audience",
                    "price_label",
                    "registration_url",
                ),
            },
        ),
        (
            "Publishing",
            {
                "fields": (
                    "status",
                    "is_published",
                ),
            },
        ),
        (
            "Record information",
            {
                "classes": ("collapse",),
                "fields": (
                    "created_at",
                    "updated_at",
                ),
            },
        ),
    )
