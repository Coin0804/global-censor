import { Context, Schema } from 'koishi'
import {} from '@koishijs/censor/lib'
export const using = ["censor"]
export const name = 'global-censor'
export interface Config {}
export const Config: Schema<Config> = Schema.object({})
export function apply(ctx: Context) {
  ctx.on("before-send",async (session)=>{
    if(!session.elements.some((e)=>e.type != "text")){
      session.elements = await ctx.censor.transform(session.elements,session)
    }
  },true)
}
