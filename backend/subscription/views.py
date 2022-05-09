from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Subscription
from .serializers import SubSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_subs(request):
    comments = Subscription.objects.all()
    serializer = SubSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def user_sub(request):
        serializer = SubSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT'])
@permission_classes([AllowAny])
def user_sub_update(request, pk):
        comment = get_object_or_404(Subscription, pk = pk)
        if request.method == 'GET':
            serializer = SubSerializer(comment)
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = SubSerializer(comment, data = request.data)
            serializer.is_valid()
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)