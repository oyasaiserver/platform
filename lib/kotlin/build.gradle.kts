plugins { kotlin("jvm") }

repositories { mavenCentral() }

dependencies { implementation(project(":gen:kotlin")) }
