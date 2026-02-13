Eigene Gedanken:


Du bist ein erfahrener Business Analyst.

Untersuche die Webseite https://xebia.com/de/ und generiere Use-Cases für  die spätere Automatisierung von Tests mit Playwright Test in TypeScript.

ZIEL
Erstelle 15 Use-Cases 

BESONDERHEITEN
- Falls ein Cookie-Banner erscheint, akzeptiere ihn.

ANFORDERUNGEN AN DIE USE-CASES
- Erstelle die Use-Cases in Englisch.
- Jedes Requirment soll einen prägnanten Titel mit maximal 5 Wörtern haben
- Jedes Requirment soll mit einer kurzen User-Story beschrieben werden
- Definiere für jedes Requirment 1 - 5 Akzeptanzkriterien

Anfrage bei ChatGPT:

Kannst Du mir helfen bei einer guten Prompt Erstellung? Ich brauche für folgende Anforderungen ein gutes Prompt:

- Du bist ein erfahrener Business Analyst
- Du untersucht eine Webseite nach Use-Cases resp. Anforderungen
- aus diesen Anforderungen sollen später automatisierte Testfälle mit Playwright erstellt werden können
- die Anforderungen sollen in englischer Sprache vorliegen
- jetzt Anforderung soll mit einem prägnanten Titel von maximal 5 Wörtern beschrieben werden
- jeder Anforderung beinhaltet eine User Story mit der Notation "As a [type of user], I want [an action] so that [a benefit/value]".
- jeder Anforderung soll 1 -5 Akzeptanzkritieren enthalten
- eine wichtige Anforderung ist, dass die Links vom Hauptbanner funktionieren
- erstelle mir 15 Use-Cases und priorisiere nach Priorität 1 und 2 

Prompt 1:

You are a senior Business Analyst with strong experience in web applications, usability, and testability for automated end-to-end testing.

Your task is to analyze the following website:
[INSERT WEBSITE URL HERE]

Based on your analysis, identify and document exactly 15 functional use cases that can later be automated using Playwright.

GENERAL RULES:
- Write all content in English
- Focus on observable, testable behavior (UI and functional level)
- Each use case must be suitable for automated browser testing

FOR EACH USE CASE, PROVIDE:
1. Title  
   - Maximum 5 words  
   - Clear and action-oriented  

2. Priority  
   - Either Priority 1 (critical) or Priority 2 (important)

3. User Story  
   - Use the exact format:  
     "As a [type of user], I want [an action] so that [a benefit/value]."

4. Acceptance Criteria  
   - Provide between 1 and 5 acceptance criteria
   - Use clear, testable statements
   - Prefer Given / When / Then style where appropriate
   - Avoid ambiguous language

MANDATORY REQUIREMENT:
- At least one Priority 1 use case must explicitly verify that all main banner links on the homepage work correctly and lead to the expected destinations.

OUTPUT FORMAT:
- Present the results as a numbered list from 1 to 15
- Each use case should follow the same structured format
- Group or clearly label use cases by Priority (Priority 1 and Priority 2)

DO NOT:
- Include technical implementation details
- Include non-functional requirements
- Reference Playwright directly in the use case text



Zusammenfassung:

- Es war teilweise schwierig, das Ergebnis konkret mit der Webseite zur verknüpfen => Prompt erweitert
- Ergebnis direkt in .txt File ausgeben 

Prompt 2:

You are a senior Business Analyst with strong experience in web applications, usability, and testability for automated end-to-end testing.

Your task is to analyze the following website:
[INSERT WEBSITE URL HERE]

Based on your analysis, identify and document exactly 15 functional use cases that can later be automated using Playwright.

GENERAL RULES:
- Write all content in English
- Focus on observable, testable behavior (UI and functional level)
- Each use case must be suitable for automated browser testing

FOR EACH USE CASE, PROVIDE:
1. Title  
   - Maximum 5 words  
   - Clear and action-oriented  

2. Priority  
   - Either Priority 1 (critical) or Priority 2 (important)

3. User Story  
   - Use the exact format:  
     "As a [type of user], I want [an action] so that [a benefit/value]."

4. UI Examples / References  
   - Provide concrete, website-specific examples as bullet points
   - Use short keywords or phrases
   - Examples may include:
     - Header or banner names
     - Button labels
     - Link texts
     - Menu items
     - Section titles
   - These examples must directly map to visible UI elements on the website

5. Acceptance Criteria  
   - Provide between 1 and 5 acceptance criteria
   - Use clear, testable statements
   - Prefer Given / When / Then style where appropriate
   - Avoid ambiguous language

MANDATORY REQUIREMENTS:
- At least one Priority 1 use case must explicitly verify that all main banner links on the homepage work correctly and lead to the expected destinations.
- The related UI Examples must explicitly name the banner(s) and link labels involved.

OUTPUT REQUIREMENTS:
- Present the results as a numbered list from 1 to 15
- Clearly label each use case with its Priority
- Use a consistent, plain-text structure suitable for file storage
- At the end of the task, write the complete result into a single plain text (.txt) file
- The file must contain only the final use cases (no explanations or meta text)
- Use a clear filename, for example: `website_use_cases.txt`

DO NOT:
- Include technical implementation details
- Include non-functional requirements
- Reference Playwright directly in the use case text
