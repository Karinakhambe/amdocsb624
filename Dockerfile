FROM openjdk : 23
EXPOSE 8081
ADD target/amdocsb624.jar amdocsb624.jar
ENTRYPOINT ["java", "-jar", "/amdocsb624.jar"]