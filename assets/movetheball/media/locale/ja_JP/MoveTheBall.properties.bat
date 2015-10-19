cd %~dp0
mxmlc -locale=ja_JP -source-path="." -include-resource-bundles=MoveTheBall -output "MoveTheBall.properties.swf" 
copy MoveTheBall.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\MoveTheBall\locale\ar_MA\