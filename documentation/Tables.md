---
title: "Howto: Tables"
---

# Tables

Tables are essential feature for any kind of more complex data presentation. 
*pdf365* supports advanced MD table syntax, in particular:
- multiple header rows
- automatic creation of cells in case columns in a row does not match
- cells can span across multiple columns
- columns adjustment can be explicitly specified

## Basic syntax

Each table has a header and a body. You can use pipes | to separate individual columns (cells) in a row. 
The header and body is separated a row where all values are at least three hyphens.
You have to include blank line before your table and after it. 

Example:

```
| Header title 1 | Header title 2 |
|----------------|----------------|
| Body value 1   | Body value 2   |
| Body value 3   | Body value 4   |
```

This will render to a table with two columns, one header row and two body rows:

| Header title 1 | Header title 2 |
|----------------|----------------|
| Body value 1   | Body value 2   |
| Body value 3   | Body value 4   |


## Multiple header rows

Your table can have multiple header rows. This can be useful especially in combination with cell spanning feature.

```
| Header title 1         | Header title 2         |
| **Title description ** | **Title description ** |
|------------------------|------------------------|
| Body value 1           | Body value 2           |
| Body value 3           | Body value 4           |
```

This will render to a table with two columns, two header rows and two body rows.

## Cell spanning

One cell can take space of multiple columns. This is called spanning. 
Column spans can be specified by adding consecutive | at the end of the cell. 
Each pipe represents column span count || spans two columns, ||| three, etc.

Empty cells must have at least one space, otherwise they are interpreted as spanning

Example:

```
| Header title 1         | Header title 2         |
| **Title description ** | **Title description ** |
|------------------------|------------------------|
| Cell spanning across two columns               ||
| This cell does not span                       | |
| Body value 3           | Body value 4           |
```

## Column adjustment

You can specify how the columns will be adjusted by using colons in the separator row.
You can align text to the left, right, or center of a column by including colons : to the left, right, or on both sides of the hyphens within the separator row.

Example:

```
| Column aligned left | Column aligned right | Centered column |
|:--------------------|---------------------:|:---------------:|
| Body value 1        | Body value 2         |  Body value 3   |
```

| Column aligned left | Column aligned right | Centered column |
|:--------------------|---------------------:|:---------------:|
| Body value 1        | Body value 2         |  Body value 3   |