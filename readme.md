# API Morada APP

## Modules
- Usuarios
- Propiedades

## API Reference

### Usuarios
Method | Endpoint | Request       | Auth Requiered
------ | -------- | -------------   ---------------
`Post` | /user/login   | body : { email, password } | No

### Propiedades
Method | Endpoint | Request       | Auth Requiered
------ | -------- | ------------- | ---------------
`Get` | /property | query: type, businessType  | No
`Get` | /property/id | url: id                 | No
`Post` | /property |body { title, valor,....}  | si
`Put` | /property/id |body { title, valor,....}  | si
`Delete` | /property/id | url: id              | si
`Post` | /property/id |body { comentario }     | si