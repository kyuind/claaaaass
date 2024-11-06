from django.contrib import admin
from .models import Post, Category, Tag, Comment
# Register your models here.

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display= ('id', 'category', 'tag_list', 'title', 'description', 'image', 'create_date', 'update_date', 'like')

    def tag_list(self, obj):
        return ','.join([t.name for t in obj.tags.all()]) # tag가 한줄로 보이게 끔 ','로 구분 (리스트컴플리션)
    
    def get_queryset(self, request):
        return super().get_queryset(request).prefetch_related('tags') #ModelAdmin 안에 quertset 존재  (prefetch_related // tags 관련 데이터를 미리 셋팅) 같이 세팅해라~  
    
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('id','post','short_content' , 'create_date', 'update_date')