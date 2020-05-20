---
title: 'Estimated Read Time Function for WordPress Posts'
path: '/blog/estimated-read-time-function-wordpress/'
description: 'Easily add a read time to your WordPress blog posts by creating a simple PHP function.'
date: '2019-12-01'
featuredImage: 'banner-wordpress.png'
author: 'Tom Gooden'
tags: ['wordpress', 'php']
---

Adding an estimated read time to your WordPress blog is easier than you may think. Often, guides will suggest you install yet another plugin to achieve your desired functionality. But in the case of displaying content read time, there are only two simple steps.

Open your theme's `functions.php` file in your WordPress root directory, and paste the following function:

```php
function reading_time( $content='', $speed = 225 ) {

  // sanitize the content
  $words = str_word_count( strip_tags( $content ) );

  // round up the quotient to nearest integer
  $time = ceil( $words / $speed );

  // plural check
  if ($time == 1) {
    $timer = ' minute';
  } else {
    $timer = ' minutes';
  }

  // concat
  $readTime = $time . $timer;

  // voilà
  return $readTime;
}

```

**By default, the words per minute is set to 225.**

That is because the average reading speed of most adults is around 200 to 250 words per minute. So let's just split the difference. If needed, you can adjust based on your audience.

The time to read (in minutes) is the quotient of the content word count and the speed at which the content is being read.

<h3 style="text-align: center;">Time = Words / Speed</h3>

The last step is to put this function we just created into the template you wish to display it:

```php
<div class="reading-time">
  <?php
    echo reading_time( get_the_content() );
  ?>
</div>
```

Since our second argument (the reading speed) is 225 by default, there is no need to pass it as an argument. However, if you did wish to adjust it, check out the following snippet:

```php
<div class="reading-time">
  <?php
    echo reading_time( get_the_content(), 300 );
  ?>
</div>
```
