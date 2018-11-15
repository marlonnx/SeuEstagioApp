class Job {
    constructor(
        public id: string,
        public userEmail: string,
        public date: string,
        public title: string,
        public local: string,
        public description: string,
        public categoryId: string,
        public requirements: string,
        public benefits: string,
        public closed: boolean,
        public closedDate: string,
    ) { }
}
export { Job }