const momentService = require('../service/moment.service')


class MomentController {
  async create(ctx, next){
    // 1.获取数据(user_id, content)
   const userId = ctx.user.id;
   const content = ctx.request.body.content;
   console.log(userId, content);

   // 2.将数据插入到数据库里
   const result = await momentService.create(userId, content);
   ctx.body = result;
  }

  async detail(ctx, next){
    // 1.获取数据(momentId)
    const momentId = ctx.params.momentId;

    // 2.根据id去查这条数据
    const result = await momentService.getMomentById(momentId);
    ctx.body = result;
  }

  async list(ctx, next) {
    // 1.获取数据(offset/size)
    const { offset, size } = ctx.query;
    console.log({offset, size})
    // 2.查询列表
    const result = await momentService.getMomentList(offset,size);
    console.log(result)
    ctx.body = result;
  }
}

module.exports = new MomentController();