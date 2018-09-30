export class Question {
    public id: string;
    public typeId: string;
    public content: string;
    public answers: string[];
    public correctAnswer: number;

    constructor(data?: any) {
        if (data) {
            this.id = data.id;
            this.typeId = data.typeId;
            this.answers = data.answers;
            this.content = data.content;
            this.correctAnswer = data.correctAnswer;
        }
    }
}

export class Answer {
    public id: number;
    public detail: string;

    constructor(data?: any) {
        if (data) {
            this.id = data.id;
            this.detail = data.detail;
        }
    }
}
