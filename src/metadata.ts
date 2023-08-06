/* eslint-disable */
export default async () => {
    const t = {
        ["./users/users.response.dto"]: await import("./users/users.response.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./users/users.response.dto"), { "UsersResponseDto": { id: { required: true, type: () => Number }, email: { required: true, type: () => String, nullable: true }, role: { required: true, type: () => String, nullable: true } } }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }], [import("./users/users.controller"), { "UsersController": { "findAllActiveUsers": { type: [t["./users/users.response.dto"].UsersResponseDto] } } }]] } };
};