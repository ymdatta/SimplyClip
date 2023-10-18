import habanero
import pdb

def generate_citation(text):
    citation_types = ['apa', 'bibtex', 'chicago-author-date', 'modern-language-association', 'vancouver']
    citation_text = ""

    try:
        for citation in citation_types:
            citation_text += citation.upper()
            citation_text += ":\n"
            citation_text += habanero.cn.content_negotiation(ids=text, format='text', style=citation) 
            citation_text += "\n"

    except:
        citation_text = ""
        citation_text += "URL: \n"
        citation_text += text

    print("Citation is: ")
    
    print(citation_text)
    #pdb.set_trace()
    output_list = [citation_text]
    return output_list
