import requests
from os import listdir
import fnmatch
import os
import glob
from os.path import isfile, join
import zipfile
import sys

exampleUsage = "Example usage: zipUpload.py [PathToZip] [ApiKey]";
tempPath = "./unzipped"

if len(sys.argv) <= 2:
    print("Please specify a path to the zip");
    print(exampleUsage);
    sys.exit();
    
pathToZip = sys.argv[1];
    
if not isfile(pathToZip):
    print(pathToZip + " could not be found.");
    print(exampleUsage);
    sys.exit();

print("Unzipping: " + pathToZip);

with zipfile.ZipFile(pathToZip, 'r') as zip_ref:
    zip_ref.extractall(tempPath);
    
onlyfiles = []
for root, dirnames, filenames in os.walk(tempPath):
    for filename in fnmatch.filter(filenames, '*'):
        onlyfiles.append(os.path.join(root, filename))

for file in onlyfiles:
    url = "https://xugc5ib648.execute-api.eu-west-1.amazonaws.com/Prod/api/FileTypeDetection";
    #print("Posting to " + url);
    headers={"x-api-key": sys.argv[2]};
    files = {'file': (file, open(file, 'rb'))};
    body = requests.post(url, files=files, headers=headers);
    print("Response for " + str(file) + " " + str(body.json()));