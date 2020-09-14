// Create data model for question
export interface Question {
    id: number;
    userid: number;
    categoryid: string;
    tags: string;
    header: string;
    content: string;
    isanswered: boolean;
    createdat: string;
    changedat: string;
}