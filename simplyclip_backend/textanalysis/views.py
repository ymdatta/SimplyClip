from django.http.response import FileResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.core.files import File
from django.core.files.storage import FileSystemStorage
from . import summarizer
from . import citation
import os
from zipfile import ZipFile
from os.path import basename
import json
import pdb


from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def summarize(request, summ_input):
    if request.method == 'GET':
        body_data = summ_input
        summarized_output = summarizer.generate_summary(body_data)
        return HttpResponse(summarized_output, content_type='text/plain')

@csrf_exempt
def getcitation(request, citation_input):
    if request.method == 'GET':
        citation_output = citation.generate_citation(citation_input)
        return HttpResponse(citation_output, content_type='text/plain')

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
def fetch(request, summ_input):
    print(summ_input)
    if request.method == 'GET':
        pdb.set_trace()
        with ZipFile('docs.zip', 'w') as zipObj:
            folderName, subfolders, filenames = os.walk("docs/")
            for filename in filenames:
                filePath = os.path.join(folderName, filename)
                zipObj.write(filePath, basename(filePath))
            doczip = open('docs.zip','rb')
            response = FileResponse(doczip)
            print("files returned")
            return response