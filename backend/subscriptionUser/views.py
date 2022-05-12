from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import SubUser
from .serializers import SubUserSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_sub_user(request):
    comments = SubUser.objects.all()
    serializer = SubUserSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def user_sub_user(request):
        serializer = SubUserSerializer(data=request.data)
        if request.method == 'GET':
            subUser = SubUser.objects.filter(user_id=request.user.id)
            serializer = SubUserSerializer(subUser, many=True)
            return Response(serializer.data)
        elif serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT'])
@permission_classes([AllowAny])
def user_sub_user_update(request, pk):
        comment = get_object_or_404(SubUser, pk = pk)
        if request.method == 'GET':
            serializer = SubUserSerializer(comment)
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = SubUserSerializer(comment, data = request.data)
            serializer.is_valid()
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)