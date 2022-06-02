const haroun = {
  questions: [
    {
      topic: {
        name: 'JS Advanced',
        subtopics: ['complicated', 'extended'],
      },
    },
  ],
}

const {
  questions: [questionOne],
} = haroun
const { topic } = questionOne
const { subtopics } = topic

console.log(subtopics)

const {
  questions: [
    {
      topic: { subtopics: subtopics2 },
    },
  ],
} = haroun

console.log(subtopics2)
