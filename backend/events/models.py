
from django.db import models


class Event(models.Model):

    class Category(models.TextChoices):
        MEETUP = "meetup", "Coffee & Connection"
        WORKSHOP = "workshop", "Workshops & Culture"
        OUTING = "outing", "MomsHub Out"
        SWAP = "swap", "MomsHub Swaps"

    class Status(models.TextChoices):
        CONFIRMED = "confirmed", "Confirmed"
        FULLY_BOOKED = "fully-booked", "Fully booked"

    title = models.CharField(max_length=200)

    description = models.TextField()

    category = models.CharField(
        max_length=20,
        choices=Category.choices,
    )

    date = models.DateField(db_index=True)

    start_time = models.TimeField()

    end_time = models.TimeField(
        null=True,
        blank=True,
    )

    location = models.CharField(max_length=200)

    address = models.CharField(
        max_length=250,
        blank=True,
    )

    audience = models.CharField(
        max_length=150,
        blank=True,
    )

    price_label = models.CharField(
        max_length=80,
        blank=True,
    )

    registration_url = models.URLField(
        blank=True,
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.CONFIRMED,
    )

    # Draft until explicitly published
    is_published = models.BooleanField(
        default=False,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        ordering = ["date", "start_time"]

    def __str__(self):
        return f"{self.title} — {self.date}"
