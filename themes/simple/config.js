const CONFIG = {

  SIMPLE_LOGO_IMG: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fc16653f4-251e-81cb-97b5-0003e0c18e6d%2F702cf890-aa3d-46f0-996e-0e29b86db118%2F83c994ed-b155-4f37-8372-d70c01c2a564.png/size/w=2000?exp=1778059005&sig=fQLmxHkz3rvoe7oRWnf6HwNSyJA3FmoEpqF466JsCNU&id=357653f4-251e-80e8-bf38-d997f4093875&table=block&userId=354d872b-594c-81f7-b471-00028ef4427f&mtd=so',
  SIMPLE_TOP_BAR: true, // 显示顶栏
  SIMPLE_TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS || '',
  SIMPLE_LOGO_DESCRIPTION: process.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION || '<div>青山<br/>记录生活与思考</div>山高水长，慢慢走</div>',

  SIMPLE_AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',

  SIMPLE_POST_AD_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_AD_ENABLE || false, // 文章列表是否插入广告

  SIMPLE_POST_COVER_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_COVER_ENABLE || true, // 是否展示博客封面

  SIMPLE_ARTICLE_RECOMMEND_POSTS: process.env.NEXT_PUBLIC_SIMPLE_ARTICLE_RECOMMEND_POSTS || true, // 文章详情底部显示推荐

  // 菜单配置
  SIMPLE_MENU_CATEGORY: true, // 显示分类
  SIMPLE_MENU_TAG: true, // 显示标签
  SIMPLE_MENU_ARCHIVE: true, // 显示归档
  SIMPLE_MENU_SEARCH: true // 显示搜索
}
export default CONFIG
