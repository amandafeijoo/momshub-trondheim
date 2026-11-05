
from django.utils import timezone
from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Event
from .serializers import EventSerializer


class UpcomingEventListView(generics.ListAPIView):

    serializer_class = EventSerializer

    permission_classes = [AllowAny]

    pagination_class = None

    def get_queryset(self):
        today = timezone.localdate()

        return (
            Event.objects
            .filter(
                is_published=True,
                date__gte=today,
            )
            .order_by("date", "start_time", "id")[:3]
        )
