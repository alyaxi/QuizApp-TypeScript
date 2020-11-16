export type Quiz = {
        category: string
        correct_answer: string
        difficulty: string
        incorrect_answers: string[]
        question: string
        type: string
}
export type QuestionType = {
        question: string
        answer: string
        option: string[]
        // correct_answer: string

}

export type QuestionpropsType = {
        question: string
        option: string[]
        callBack: (e:React.FormEvent<EventTarget>, answer: string)=>void
     }