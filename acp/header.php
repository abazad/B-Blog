<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="initial-scale=1, width=device-width, height=device-height" />
	<title><?php echo $CONF['SITE_TITLE']; ?></title>
	<link rel="stylesheet" type="text/css" href="lib/main.css" />
	<link rel="stylesheet" type="text/css" href="../lib/font-awesome.css" />
	<script type="text/javascript" src="lib/jquery.min.js"></script>
	<script type="text/javascript" src="lib/main.js"></script>
</head>
<body>
	<ul class="top-nav">
		<li>| | |</li>
		<a href="index.php"><li class="fa-tachometer">داشبورد</li></a>
		<a href="posts.php"><li class="fa-book">مطالب</li></a>
		<a href="categories.php"><li class="fa-list">دسته ها</li></a>
		<a href="comments.php"><li class="fa-comments">دیدگاه ها</li></a>
		<a href="users.php"><li class="fa-users">کاربران</li></a>
		<a href="settings.php"><li class="fa-cog">تنظیمات</li></a>
	</ul>

	<div class="side">
		<span>مطالب</span>
		<ul>
			<a href="post.php"><li>ارسال مطلب جدید</li></a>
			<a href="posts.php?Q=all"><li>لیست مطالب</li></a>
			<a href="posts.php?Q=published"><li>مطالب منتشر شده</li></a>
			<a href="posts.php?Q=wait"><li>در انتظار تائید</li></a>
			<a href="posts.php?Q=rejected"><li>مطالب رد شده</li></a>
			<a href="posts.php?Q=draft"><li>پیش نویس ها</li></a>
		</ul>
		<span>دسته ها</span>
		<ul>
			<a href="categories.php"><li>لیست دسته ها</li></a>
			<a href="categories_new.php"><li>افزودن دسته جدید</li></a>
		</ul>
		<span>دیدگاه ها</span>
		<ul>
			<a href="comments.php"><li>لیست کامل</li></a>
			<a href="comments_accepted.php"><li>تائید شده</li></a>
			<a href="comments_wait.php"><li>در انتظار تائید</li></a>
			<a href="comments_rejected.php"><li>دیدگاه های رد شده</li></a>
		</ul>
		<span>کاربران</span>
		<ul>
			<a href="users.php"><li>لیست کاربران</li></a>
			<a href="users_new.php"><li>کاربر جدید</li></a>
			<a href=""><li>نویسندگان</li></a>
		</ul>
		<span>بیشتر</span>
		<ul>
			<a href=""><li>برچسب ها</li></a>
			<a href=""><li></li></a>
			<a href=""><li></li></a>
			<a href=""><li></li></a>
			<a href=""><li></li></a>
		</ul>
	</div>


	<div class="main">
