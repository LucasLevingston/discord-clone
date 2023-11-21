import { authMiddleware } from "@clerk/nextjs";

// Configure o middleware de autenticação
export default authMiddleware({
  // Adicione rotas que devem ser públicas (não exigem autenticação)
  publicRoutes: ["/api/uploadthing", "/public-route-1", "/public-route-2"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
