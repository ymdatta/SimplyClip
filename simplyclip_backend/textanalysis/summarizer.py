from transformers import pipeline

def generate_summary(text):
    summarizer = pipeline("summarization")
    summarize_text = summarizer(text, min_length=30, max_length=130, do_sample = False)
    print(summarize_text)
    return summarize_text


    
