echo "is netlify: $NETLIFY"
echo "in branch: $BRANCH"
echo "REPOSITORY_URL: $REPOSITORY_URL"
echo "HEAD: $HEAD"
echo "COMMIT_REF: $COMMIT_REF"
echo "CACHED_COMMIT_REF: $CACHED_COMMIT_REF"
echo "INCOMING_HOOK_TITLE: $INCOMING_HOOK_TITLE"
echo "REPOSITORY_URL: $REPOSITORY_URL"

if [ "$NETLIFY" != "true" ]
then
  echo "this script only runs in netlify, bye"
  exit 1
fi

if [ "$BRANCH" != "dev" ] || [ "$HEAD" != "dev" ]
then
  yarn doc
else
  echo "this script only runs in targeting dev's PR deploy preview, bye"
fi
