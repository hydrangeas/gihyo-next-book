// typesは後ほど定義
import { ApiContext, User } from '../../types/data'
// 先ほど定義したsrc/utils/index.tsから読み込み
import { fetcher } from '../../utils'

export type SigninParam = {
  /**
   * ユーザー名
   * サンプルユーザーのユーザー名は "user"
   */
  username: string
  /**
   * パスワード
   * サンプルユーザーのパスワードは "password"
   */
  password: string
}

/**
 * 認証API（サインイン）
 * @param context APIコンテキストt
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signin = async (
  context: ApiContext,
  params: SigninParam,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
