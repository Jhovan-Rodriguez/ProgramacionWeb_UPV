<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wordpress' );

/** Database password */
define( 'DB_PASSWORD', 'JhovanRM_17' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'R@.KtLcgT=9B;P*V!w9oG(b<VNOmc Atlc3v2^5b*ptsOOHYYwQrYL/Q^oZSL?;i' );
define( 'SECURE_AUTH_KEY',  '136Og#VF;o{)P_iR3Xt|!-48Ob#c&yKK|` w>|]R}b[d1pW|yuP~:EI+2$s_b~Ca' );
define( 'LOGGED_IN_KEY',    'YjS~?IS>W1)-$(fNBJmwVJb_+Y{ZLw}L+}}1[!%~o4$0mL4b/KXG_?;hv$vL^Ull' );
define( 'NONCE_KEY',        'bz+^9[tt0u]8a}[6+|MaNR!;!=p5?pU{5uA4Kj#|,)FQzl]%s*g?0bC&,P~:ocdI' );
define( 'AUTH_SALT',        'h>gpfg[?]5_cbWTi-&YH`KM1a2kG!5rd;!AsAA6&vlrzkEgK{[{ .VVm?|(gyz9[' );
define( 'SECURE_AUTH_SALT', 'FSeqnluU+xDq.keOm9x|s/ fO4<37%_jizpoxD(p;esAV=lPtJ[uBQq8T)o;ICny' );
define( 'LOGGED_IN_SALT',   '*>h_R~VBH+^rna#k`pkO[adoD_aC_Z`9s-Bc[fY~AX;vPTsU}XApr/y-8C] LH~^' );
define( 'NONCE_SALT',       '8O+~pad!PQs?gGvV8AMieX:>vrsH9mLriT8WgpiSTBUME.bSm,/*>34>qb;n646.' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
