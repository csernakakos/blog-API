# Blog API
[Full project description](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/blog-api)


## Achieved so far
For Comments, created:
- Model
  - every comment belongs to exactly 1 post
  - 1 post can have many comments
  - 1 comment can belong to maximum 1 post

## Next steps
1. Backend
   1. Validate data
   2. Handle errors
2. Frontend
   1. Create 2 websites
   2. HTML form validation
3. Docs
   1. Document the Blog API

## Overview
The Blog API is a REST API with 2 frontends:
- One for anyone to read blog posts and add comments
- One for the blog owner to:
  - Create, publish/unpublish, and delete blog posts
  - Delete comments

## **DONE** Database models
**user** {
   username,
   email,
   password,
}

**posts** {
   title,
   body,
   isPublished,
   timestamp,
   relatedUserID,
   relatedComments
}

**comments** {
   username,
   body,
   timestamp,
   relatedPostID,
}

## Endpoints
1. **DONE** `/blog/api/v1/posts`
   1. GET       `/`
   2. POST      `/`
   3. GET       `/:ID`
   4. PUT       `/:ID`
   5. DELETE    `/:ID`
   6. GET       `/:ID/comments`
   7. POST      `/:ID/comments/`
   8. DELETE    `/:ID/comments/:commentID`

2. **DONE** `/blog/api/v1/users`
   1. POST      `/signup`
   2. POST      `/login`
   3. POST      `/logout`


3. `/blog`
   1. GET       `/`
   2. GET       `/posts/:ID`
   3. POST      `/posts/:ID/comments/:ID`


4. `/blog/editor`
   1. GET       `/posts`
   2. POST      `/posts/:ID`, tinyMCE
   3. DELETE    `/posts/:ID`
   4. PUT       `/posts/:ID`
   5. GET       `/posts/:ID/comments`
   6. DELETE    `/posts/:ID/comments/:ID`