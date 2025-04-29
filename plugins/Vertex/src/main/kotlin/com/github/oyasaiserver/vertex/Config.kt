package com.github.oyasaiserver.vertex

object Config {
    object Database {
        object Mongo {
            val HOST: String = System.getenv("MONGO_HOST")
            val PORT: String = System.getenv("MONGO_PORT")
            val DB: String = System.getenv("MONGO_DB")
        }

        object Postgres {
            val HOST: String = System.getenv("POSTGRES_HOST")
            val PORT: String = System.getenv("POSTGRES_PORT")
            val DB: String = System.getenv("POSTGRES_DB")
            val USER: String = System.getenv("POSTGRES_USER")
            val PASSWORD: String = System.getenv("POSTGRES_PASSWORD")
        }
    }
}
