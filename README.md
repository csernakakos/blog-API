# Blog API
[Full project description](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/blog-api)

The Blog API is a REST API with 2 frontends:
- One for anyone to read blog posts and add comments
- One for the blog owner to:
  - Create, publish/unpublish, and delete blog posts
  - Delete comments




## Database models
**user** {
   username,
   email,
   password,
}

**posts** {
   title,
   text,
   isPublished,
   timestamp,
   relatedUserID,
   ID,
}

**comments** {
   username,
   text,
   timestamp,
   relatedPostID,
   ID,
}

## Endpoints

1. `/api/v1`
   1. GET       `/posts`
   2. GET       `/posts/:ID`
   3. GET       `/posts/:ID/comments`
   4. GET       `/posts/:ID/comments/:ID`
   5. POST      `/posts/:ID`
   6. POST      `/posts/:ID/comments/:ID`
   7. PUT       `/posts/:ID`
   8. DELETE    `/posts/:ID`
   9. DELETE    `/posts/:ID/comments/:ID`


2. `/blog`
   1. GET       `/`
   2. GET       `/posts/:ID`
   3. POST      `/posts/:ID/comments/:ID`


3. `/editor`
   1. GET       `/posts`
   2. POST      `/posts/:ID`, tinyMCE
   3. DELETE    `/posts/:ID`
   4. PUT       `/posts/:ID`
   5. GET       `/posts/:ID/comments`
   6. DELETE    `/posts/:ID/comments/:ID`