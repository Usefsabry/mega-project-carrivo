# 📋 Test API Request - Complete Documentation

## 🔗 Endpoint
**POST** `http://carrivo.runasp.net/api/test/submit`

## 📤 Request Headers
```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer {token}"  // Optional - if user is logged in
}
```

## 📦 Request Body Structure

```json
{
  "answers": {
    "page1_q1": "Strongly Agree",
    "page1_q2": "Agree",
    "page1_q3": "Neutral",
    "page1_q4": "Disagree",
    "page1_q5": "Strongly Disagree",
    "page1_q6": "Strongly Agree",
    "page1_q7": "Agree",
    "page1_q8": "Neutral",
    "page1_q9": "Disagree",
    "page1_q10": "Strongly Disagree",
    "page1_q11": "Strongly Agree",
    "page1_q12": "Agree",
    "page1_q13": "Neutral",
    "page1_q14": "Disagree",
    "page2_q1": "Strongly Agree",
    "page2_q2": "Agree",
    "page2_q3": "Neutral",
    "page2_q4": "Disagree",
    "page2_q5": "Strongly Disagree",
    "page2_q6": "Strongly Agree",
    "page2_q7": "Agree",
    "page2_q8": "Neutral",
    "page2_q9": "Disagree",
    "page2_q10": "Strongly Disagree",
    "page2_q11": "Strongly Agree",
    "page2_q12": "Agree",
    "page2_q13": "Neutral",
    "page2_q14": "Disagree",
    "page3_q1": "Strongly Agree",
    "page3_q2": "Agree",
    "page3_q3": "Neutral",
    "page3_q4": "Disagree",
    "page3_q5": "Strongly Disagree",
    "page3_q6": "Strongly Agree",
    "page3_q7": "Agree",
    "page3_q8": "Neutral",
    "page3_q9": "Disagree",
    "page3_q10": "Strongly Disagree",
    "page3_q11": "Strongly Agree",
    "page3_q12": "Agree",
    "page3_q13": "Neutral",
    "page3_q14": "Disagree"
  }
}
```

---

## 📝 Questions List (for reference)

### Page 1 Questions:
1. **page1_q1**: "I like to work on cars"
2. **page1_q2**: "I like to do puzzles"
3. **page1_q3**: "I am good at working independently"
4. **page1_q4**: "I like to work in teams"
5. **page1_q5**: "I am an ambitious person, I set goals for myself"
6. **page1_q6**: "I like to organize things. (files, desks/offices)"
7. **page1_q7**: "I like to build things"
8. **page1_q8**: "I like to read about art and music"
9. **page1_q9**: "I like to have clear instructions to follow"
10. **page1_q10**: "I like to try to influence or persuade people"
11. **page1_q11**: "I like to do experiments"
12. **page1_q12**: "I like to teach or train people"
13. **page1_q13**: "I like trying to help people solve their problems"
14. **page1_q14**: "I like to take care of animals"

### Page 2 Questions:
1. **page2_q1**: "I wouldn't mind working 8 hours per day in an office"
2. **page2_q2**: "I like selling things"
3. **page2_q3**: "I enjoy creative writing"
4. **page2_q4**: "I enjoy science"
5. **page2_q5**: "I am quick to take on new responsibilities"
6. **page2_q6**: "I am interested in healing people"
7. **page2_q7**: "I enjoy trying to figure out how things work"
8. **page2_q8**: "I like putting things together or assembling things"
9. **page2_q9**: "I am a creative person"
10. **page2_q10**: "I pay attention to details"
11. **page2_q11**: "I like to do filing or typing"
12. **page2_q12**: "I like to analyze things (problems/situations)"
13. **page2_q13**: "I like to play instruments or sing"
14. **page2_q14**: "I enjoy learning about other cultures"

### Page 3 Questions:
1. **page3_q1**: "I would like to start my own business"
2. **page3_q2**: "I like to cook"
3. **page3_q3**: "I like acting in plays"
4. **page3_q4**: "I am a practical person"
5. **page3_q5**: "I like working with numbers or charts"
6. **page3_q6**: "I like to get into discussions about issues"
7. **page3_q7**: "I am good at keeping records of my work"
8. **page3_q8**: "I like to lead"
9. **page3_q9**: "I like working outdoors"
10. **page3_q10**: "I would like to work in an office"
11. **page3_q11**: "I'm good at math"
12. **page3_q12**: "I like helping people"
13. **page3_q13**: "I like to draw"
14. **page3_q14**: "I like to give speeches"

---

## ✅ Valid Answer Values

Each question must have one of these values (case-sensitive):
- `"Strongly Agree"`
- `"Agree"`
- `"Neutral"`
- `"Disagree"`
- `"Strongly Disagree"`

**Total Questions:** 42 (14 per page × 3 pages)

---

## 📥 Expected Response

```json
{
  "recommendedTracks": [1, 2, 5, 12, 18, 24]
}
```

**Response Fields:**
- `recommendedTracks`: Array of track IDs (integers 1-24) that match the user's personality test results

### Track IDs Reference:
- 1 = Backend
- 2 = Frontend
- 3 = Data Analyst
- 4 = Full Stack
- 5 = AI Engineer
- 6 = AI and Data Scientist
- 7 = Blockchain
- 8 = Cyber Security
- 9 = DevOps
- 10 = Game Developer
- 11 = Android
- 12 = iOS
- 13 = Product Manager
- 14 = Engineering Manager
- 15 = Developer Relations
- 16 = Technical Writer
- 17 = Software Architect
- 18 = BI Analyst
- 19 = Data Engineer
- 20 = Machine Learning
- 21 = MLOps
- 22 = QA
- 23 = Server-Side Game Developer
- 24 = UI/UX Designer

---

## 🔧 Example cURL Request

```bash
curl -X POST http://carrivo.runasp.net/api/test/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "answers": {
      "page1_q1": "Strongly Agree",
      "page1_q2": "Agree",
      "page1_q3": "Neutral",
      "page1_q4": "Disagree",
      "page1_q5": "Strongly Disagree",
      "page1_q6": "Strongly Agree",
      "page1_q7": "Agree",
      "page1_q8": "Neutral",
      "page1_q9": "Disagree",
      "page1_q10": "Strongly Disagree",
      "page1_q11": "Strongly Agree",
      "page1_q12": "Agree",
      "page1_q13": "Neutral",
      "page1_q14": "Disagree",
      "page2_q1": "Strongly Agree",
      "page2_q2": "Agree",
      "page2_q3": "Neutral",
      "page2_q4": "Disagree",
      "page2_q5": "Strongly Disagree",
      "page2_q6": "Strongly Agree",
      "page2_q7": "Agree",
      "page2_q8": "Neutral",
      "page2_q9": "Disagree",
      "page2_q10": "Strongly Disagree",
      "page2_q11": "Strongly Agree",
      "page2_q12": "Agree",
      "page2_q13": "Neutral",
      "page2_q14": "Disagree",
      "page3_q1": "Strongly Agree",
      "page3_q2": "Agree",
      "page3_q3": "Neutral",
      "page3_q4": "Disagree",
      "page3_q5": "Strongly Disagree",
      "page3_q6": "Strongly Agree",
      "page3_q7": "Agree",
      "page3_q8": "Neutral",
      "page3_q9": "Disagree",
      "page3_q10": "Strongly Disagree",
      "page3_q11": "Strongly Agree",
      "page3_q12": "Agree",
      "page3_q13": "Neutral",
      "page3_q14": "Disagree"
    }
  }'
```

---

## 📌 Important Notes

1. **All 42 questions must be answered** - No empty strings allowed
2. **Answer values are case-sensitive** - Must match exactly: "Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"
3. **Question IDs must match exactly** - Format: `page{1-3}_q{1-14}`
4. **Authorization header is optional** - Include if user is logged in
5. **Response contains track IDs** - Match these IDs with your tracks database (1-24)



