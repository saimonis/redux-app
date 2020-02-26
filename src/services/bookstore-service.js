class BookStoreService{
    getBooks(){
        return {
            books:[
                {id:1,
                name: "Production-Ready Microservices",
                author: "Susan J. Fowler"
                },
                {id:2,
                    name: "Release It!",
                    author: "Michael T. Nygard"
                },
            ]
        }
    }
}

export default BookStoreService