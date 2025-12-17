# Test API Documentation

## 📍 Endpoints

### 1. Save Test Progress
**POST** `/api/test/save-progress`

### 2. Submit Test (Get Results)
**POST** `/api/test/submit`

---

## 📤 REQUEST Format

### Headers
```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer {token}"  // Optional - if user is logged in
}
```

### Request Body
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

### Answer Values
Each answer can be one of:
- `"Strongly Agree"`
- `"Agree"`
- `"Neutral"`
- `"Disagree"`
- `"Strongly Disagree"`

**Total Questions:** 42 (14 per page × 3 pages)

---

## 📥 RESPONSE Format

### Submit Test Response
```json
{
  "recommendedTracks": [1, 2, 5, 12, 18, 24]
}
```

**Response Fields:**
- `recommendedTracks`: Array of track IDs (integers) that match the user's personality test results

### Save Progress Response
```json
{
  "success": true,
  "message": "Progress saved successfully"
}
```

---

## 💾 localStorage Structure

### Keys Used:
1. **`carrivo_test_progress`** - Stores progress during test (same format as request body)
2. **`testAnswers`** - Stores final answers when test is completed (same format as request body)
3. **`testCompleted`** - Boolean string: `"true"` or `"false"`
4. **`testCompletionDate`** - ISO date string: `"2024-01-15T10:30:00.000Z"`

### Example localStorage Data:
```javascript
// carrivo_test_progress or testAnswers
{
  "page1_q1": "Strongly Agree",
  "page1_q2": "Agree",
  // ... all 42 questions
}

// testCompleted
"true"

// testCompletionDate
"2024-01-15T10:30:00.000Z"
```

---

## 🔧 Example Usage

### JavaScript/Fetch Example
```javascript
const answers = {
  page1_q1: "Strongly Agree",
  page1_q2: "Agree",
  // ... all 42 questions
};

// Submit Test
const response = await fetch('http://carrivo.runasp.net/api/test/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN' // Optional
  },
  body: JSON.stringify({ answers })
});

const result = await response.json();
console.log(result.recommendedTracks); // [1, 2, 5, ...]
```

### cURL Example
```bash
curl -X POST http://carrivo.runasp.net/api/test/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "answers": {
      "page1_q1": "Strongly Agree",
      "page1_q2": "Agree",
      ...
    }
  }'
```

---

## 📝 Notes

- All 42 questions must be answered (no empty strings) before submitting
- Answer values are case-sensitive
- The `recommendedTracks` array contains track IDs that should be matched against your tracks database
- If user is logged in, include the `Authorization` header with Bearer token

