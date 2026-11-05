
from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):

    id = serializers.CharField(read_only=True)

    startTime = serializers.TimeField(
        source="start_time",
        format="%H:%M",
        read_only=True,
    )

    endTime = serializers.TimeField(
        source="end_time",
        format="%H:%M",
        read_only=True,
    )

    priceLabel = serializers.CharField(
        source="price_label",
        read_only=True,
    )

    registrationUrl = serializers.CharField(
        source="registration_url",
        read_only=True,
    )

    class Meta:
        model = Event

        fields = [
            "id",
            "title",
            "description",
            "category",
            "date",
            "startTime",
            "endTime",
            "location",
            "address",
            "audience",
            "priceLabel",
            "status",
            "registrationUrl",
        ]
