import habanero

class CitationError(Exception):
    pass

def generate_citation(text):
    citation_types = ['apa', 'bibtex', 'chicago-author-date', 'modern-language-association', 'vancouver']
    citation_text = ""

    try:
        for citation in citation_types:
            citation_text += citation.upper()
            citation_text += ":\n"
            citation_text += habanero.cn.content_negotiation(ids=text, format='text', style=citation) 
            citation_text += "\n"
    except Exception as e:
        raise CitationError("Error in citation generation: " + str(e))

    print("Citation is: ")
    print(citation_text)
    output_list = [citation_text]
    return output_list
