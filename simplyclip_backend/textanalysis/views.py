from django.http.response import FileResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.core.files import File
from django.core.files.storage import FileSystemStorage
from . import summarizer
import os
from zipfile import ZipFile
from os.path import basename
import json


from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def summarize(self, request, summ_input):
    if request.method == 'POST':
        body_data = summ_input
        print(type(body_data))
        print(body_data)
        summarized_output = summarizer.generate_summary(body_data)
        #print(summarized_output)
        return HttpResponse(summarized_output, content_type='text/plain')

@csrf_exempt
def upload(request):
    folder='docs/' 
    if request.method == 'POST' and request.FILES['myfile']:
        myfile = request.FILES['myfile']
        fs = FileSystemStorage(location=folder)
        filename = fs.save(myfile.name, myfile)
        #file_url = fs.url(filename)
        msg = "File stored successfully"
        print("file stored")
        return HttpResponse(msg, content_type='text/plain')

@csrf_exempt
def fetch(request):
    if request.method == 'GET':
        with ZipFile('docs.zip', 'w') as zipObj:
            folderName, subfolders, filenames = os.walk("docs/")
            for filename in filenames:
                filePath = os.path.join(folderName, filename)
                zipObj.write(filePath, basename(filePath))
            doczip = open('docs.zip','rb')
            response = FileResponse(doczip)
            print("files returned")
            return response
       
    


