# Blog API
[Full project description](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/blog-api)

## Next steps
Carry on with Comments and Post > relatedUserID.

## Overview
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
   body,
   isPublished,
   timestamp,
   relatedUserID,
   relatedComments
}

**comments** {
   username,
   text,
   timestamp,
   relatedPostID,
}

## Endpoints
1. `/blog/api/v1/posts`
   1. GET       `/`     DONE
   2. POST      `/`     DONE
   3. GET       `/:ID`  DONE
   4. PUT       `/:ID`  DONE
   5. DELETE    `/:ID`  DONE
   6. GET       `/:ID/comments`
   7. POST      `/:ID/comments/`
   8. DELETE    `/:ID/comments/:ID`

2. `/blog/api/v1/users`
   1. POST       `/signup` DONE
   2. POST      `/login`   DONE
   3. POST      `/logout`  DONE


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