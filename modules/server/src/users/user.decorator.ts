import { ExecutionContext, createParamDecorator } from '@nestjs/common';

//TODO should we enforce type safety here? fx: createParamDecorator<string>
export const User = createParamDecorator((_, ctx: ExecutionContext) => {
  return ctx.switchToHttp().getRequest().user;
});
