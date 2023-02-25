/**
 * 接口和别名的交替使用
 */
interface ArticleInterface<B, C> {
  // 标题 锁定 评论
  title: string;
  isLock: B;
  comment: C[];
}

type CommentType = {
  // 内容 作者
  content: string;
  author: string;
};

const hd: ArticleInterface<Boolean, CommentType> = {
  title: "typescript",
  isLock: true,
  comment: [{ content: "向军大叔", author: "后盾人" }],
};

console.log(hd);
