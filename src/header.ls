require! {
  nunjucks
  'package.json'
}

class NonMainError extends Error
  ->
    @name="NonMainError"
    @message= ``m !== null && m !== void 0 ? m : ""``

if process.main is module
  throw new NonMainError "Module shouldn't be called directly"

ss=nunjucks.runtime.SafeString
