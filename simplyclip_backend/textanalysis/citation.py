import habanero

class CitationError(Exception):
    pass

def generate_citation(text):
    citation_types = ['apa', 'bibtex', 'chicago-author-date', 'modern-language-association', 'vancouver']
    citation_text = ""

    if len(text) > 100:
        # Mark it as a URL
        citation_text = "Can't cite: This doesn't look like a DOI. Please check!"
        return [citation_text]

    try:
        for citation in citation_types:
            citation_text += citation.upper()
            citation_text += ":\n"
            citation_text += habanero.cn.content_negotiation(ids=text, format='text', style=citation) 
            citation_text += "\n"
    except Exception as e:
        raise CitationError("Error in citation generation: " + str(e))
    except:
        citation_text = ""
        citation_text += "URL: \n"
        citation_text += text

    output_list = [citation_text]
    return output_list
