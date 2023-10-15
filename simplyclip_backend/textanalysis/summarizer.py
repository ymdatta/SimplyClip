from transformers import pipeline
import pdb

def generate_summary(text):
    summarizer = pipeline("summarization")
    summarize_text = summarizer(text, min_length=30, max_length=130, do_sample = False)
    print ("SUMMARIZED TEST IS: ")
    print(summarize_text)
    print ("SUMMARIZED TEST END IS: ")
    new_list = []
    new_list.append(summarized_text[0]['summary_text'])
    return new_list 


    
