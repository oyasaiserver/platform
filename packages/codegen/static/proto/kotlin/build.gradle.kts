plugins { kotlin("jvm") }

repositories { mavenCentral() }

dependencies {
    implementation("com.connectrpc:connect-kotlin-google-java-ext:0.7.3")
    implementation("com.google.protobuf:protobuf-java:4.31.1")
    implementation("com.connectrpc:connect-kotlin:0.7.3")
}
