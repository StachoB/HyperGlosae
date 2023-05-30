#language: fr

Fonctionnalité: Change position of a document in a collection

Scénario: sans être connecté

Soit "Lavage des tuniques – Comparaison de vitraux" le document principal
Quand je glisser la image "Photographie : vitrail, baie 113" derrière la image "Photographie : vitrail, baie 6"
Alors je peux lire "Before editing this document, please log in first"

Scénario: en étant connecté

Soit "Lavage des tuniques – Comparaison de vitraux" le document principal
Et une session active avec mon compte
Quand je glisser la image "Photographie : vitrail, baie 113" derrière la image "Photographie : vitrail, baie 6"
Alors la image "Photographie : vitrail, baie 6" apparaît avant la image "Photographie : vitrail, baie 113"