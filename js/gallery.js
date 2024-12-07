// Embedded JSON data
const images = [
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczOZbe-asrRMaq3tNlMKdMtobe6uSujS5NcodfDTeLD7OZ7F6aRJIsQPVZBXNwDW-WS8G5BYYhvQ2bv7HvWvLRZwcnS5WJIBVWKBzn_oL73q-kotcg0ijyECoKITgUU9ZtuEDotN5aeY4qOkX0_baRs=w1433-h941-s-no-gm?authuser=0",
		"alt": "001",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczMek-z-86Yo_06mAQhukpj3OisRFxbv0h5BhvK5XWUI24W9Lo7n3m68nM_ZBetyXDG4x6CGuTXFb5QDRhAZBUToJem5mxavMnJk45gNlV_jSa2wGm96knoa05G895aiUrMaQtdbofx-nFxTLrAr5R8=w1372-h951-s-no-gm?authuser=0",
		"alt": "002",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczMHxIweP0SRE2A1nubmPwprc3sJDKEwq6GERvVoI5x8JzNIUq2_yME7T4ecMpISyb5193ADArPeGxfO2Z43pWd8J6g9o7ScFDvbVSEgaAMqb3o3UB3ZN05UGgsCFv-ZZ61Sm0-FlXvNiFx47VtAaRk=w1342-h951-s-no-gm?authuser=0",
		"alt": "003",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczMxLwlwz9JJrUbuaRmjhW5Mc2soJ_YSP6pI4fnFY9FKpyN3_zQJcayTjp-NGDvx0cuu8TUUegQFa7He3JoUgtZgOnPbZjzhuUYLi2cPg3wi-TvVL30OMmn9g-O_v71T8mfjiY_jLIw68Ltxnv5RDRI=w1427-h929-s-no-gm?authuser=0",
		"alt": "004",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczM-6Ymms55AD5THkUkTLVAaaozqueyUjR2ZfxG5I0ByZ-jlW_ndCQDjy8pCsf_w_ILKUlFyvGo-aY9MK0yHKhxMVOZ7D8bny566JwMYJI65BxfbQ07WufMgdPQcVnL0M_IvGUChLRqlsFVFrw8ewwA=w1376-h951-s-no-gm?authuser=0",
		"alt": "005",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczOZB5z6no55t_Oq1SyakPTFpwDMxXx1g8dgRKKMHAh6CzN2yKQf3Z-8xdlr8JZE4SyHGbT6ubNFyO4qfi8pjLl0T5CYKGU5JaIl6bZY7e7NjxNTmlFdEbuLENNNwWlg-Gf5jnhePuGdfQkplU9sGow=w1342-h951-s-no-gm?authuser=0",
		"alt": "006",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczNkz0DoVKLWtL_zbwAwC2ZzgZUoQTqAXGuTCQzAvUuDZrkga3fcNWiMft24qWqiHrljo69MQMdORIB4uuSBB6bUTjMWeSeJsP6t6au8ehCNcMxFt5vFz-Gr19J--kM1COyRbTTFEJ1Rb1wGKCVj8V4=w661-h951-s-no-gm?authuser=0",
		"alt": "007",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczOxy2bTOQurUfAIqvnWLuGZfoki2a0WThymvcPeYrrSrYeQfyHO1JnkNooLNXPTwpnI2mfk7slpU1_849DnB6hitiLBljM4gRfQqLcEx4IDg1Vkc8TtcizLYzx-T_6MQR5X7sDYqDZziqG1tYf07Y8=w960-h720-s-no-gm?authuser=0",
		"alt": "008",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczOtcSLbWB7d3mut_9xnCv5VoUEW0yyaNqG2Srd9i5dR_R8Gw_vuKcsTatADAQ_cmODZsKFoHshTz8sFpZlBqCzSQv-0xyhVi42b8QD9KUg8q4lcUJqz_u1kT47ZLE3og5ssN71QtQZdIJ9uE0_nRnU=w960-h720-s-no-gm?authuser=0",
		"alt": "009",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczNdzyXdrcVqDtJWejo92BM0TGCVPrcehvBFIhcjarWW-LfJUFZAqeP43rg3Nk8S6hgg1_uNW7mOyHdWjlSsGB1xb21KH1551-Cvx9FhwtsslXoe2V90sCV_1AmdauPuVX13RhdSUF0AAEYf0bXgFws=w960-h720-s-no-gm?authuser=0",
		"alt": "010",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczMbFlQtSEUl-8wYfxy5gp9Du5ctJDs45dChhnsTRtn3veycKj1yDO94mJfBqrFPCBI7hTN3uhT6OI7BAVZTGvzf2e1ervREYpgRwgShaIv6jcKEHaQ_XbJClmuuLbpfwUmXzLej5mbLlbHCLP2Gozs=w960-h643-s-no-gm?authuser=0",
		"alt": "011",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczNvgCGFgVHQoJerFt-E1AwlqO6aoF8QbCI0np49XBMBYFybAQEiuy9M4GYUSz-aSVcm351-Fv6cKifGxilbwIVWFHqCTHe3-qDo0mG_8wayyiQmirX42Vi37pgU_ZuIDj3R_b09ymGeq_bh0-B6pLI=w960-h720-s-no-gm?authuser=0",
		"alt": "012",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczP8htUVxYkCRFUUel4VSR62DolqyZm41JRrfn-oOg1ZGxN6AcOjd26VIMs485PnNCGm_Q13iNAw5O8DyGaV_iD63egRXzORz5Bb2bZCP4aWcbgeKQkHoxKmpDhLez53KMaTKGus0Ph2oEEgrKE_e7k=w960-h643-s-no-gm?authuser=0",
		"alt": "013",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczM2efAxePlICk4Fm7fmm3kIR_KcrFM1FOo_bLkoK0zeFn_8Pk-ilw9UUg-BF4bJtUdBaJKTQ1gqFMHXqUhb2-bnDt3l_61cStLtlGyh0znzZjeY1g4NmdHVAxYJKoahqlKdo4LQJfZAgh4uTnbpFyI=w960-h720-s-no-gm?authuser=0",
		"alt": "014",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczNQu9dvaV1F17MEvMZC8fzeH_xj8lcSkH0Ez-971SA4-mMyMQ-DXoyPR8X5DGPvTYzVKCfcTwvgwBleOURC01QxuPAnYSQtAEFGqy8T6zyvOjyZbpp_g4qSev2ejwQqsLlYfqPn8DFPizq1Y9G4fkw=w960-h643-s-no-gm?authuser=0",
		"alt": "015",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczP1Qw7jxAIvV-mC3V1CFxc30lBOWC6jUD3JAupUhZsWHbAAjKZE_fhHdTEwgWzofhtfCCwioC69_PgzFMLxQOph_u5bwhd2IU0WdS3Eos29iBWVGv45iDq4DS2YaECk_1LtmNTcncH8zuc3ZO1cYHo=w637-h951-s-no-gm?authuser=0",
		"alt": "016",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczOXyUu4mHAhmVvYgI5wLvXith3WpoPBk0e2ovXvXHvgc3jkNqGRNppMTC72E5g-1ezPZwkpjHklTLIu_aFwsVM92QEsyzlHhKxMHtxUVF30HgvoSNU5ZsrvanC_uWFl2nuqL9nSq_dBVHexa0ri2lk=w960-h643-s-no-gm?authuser=0",
		"alt": "017",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczMkty81LmfI_tO8vYq0VYCvpWOh_79kpW75dAE0NtDqlDDrfQuNhhdgqXGqckQzTcjsh433-bWqS5ejSKo0U4bvPeQqDRhOWkcOVFzIH5dOnSM55zrs4iHwIqQhaWDH2i_TyGxWovu4lF_FbuH9dmc=w960-h720-s-no-gm?authuser=0",
		"alt": "018",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczMSzyc_kLtZ5R_a28X1kEsdKULRSHdSqd2sAeb_D3kuyWn13PT-PEbLscxQbWm78zNzp6SWWkWpxIloBxdqH3f_PI1xzGzde3RnnQ1O_Ht8GbxKW0OjCp9-MyzZReepqJk4bbXY5z8O-2VfAKbqNYk=w960-h720-s-no-gm?authuser=0",
		"alt": "019",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczN-lbJ4WHjKiBZ_MvIJcSfmDI1LYnrMA4cmsPrMGGg1B2eFP7GAEH7iW4yNUtTQBraFttj6dyqhsKLBaSIF8PLSALmlFKq_-QhDValv1Mma4enuaEMpHpELZ2-1A2RcSKNWI0yB2YdmZwuWmbB74mY=w960-h653-s-no-gm?authuser=0",
		"alt": "020",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczPvByw9LzZgOiWyW06NhGObnScFo7ikgK_-QoCPzXuVaLuiEuZUUJK9a5C_Abu7vYmBJFSP1OKH71qsSS4I_VduMguM9d8jECrO8lZRolid30Y8MHO1pD75jMYX2vf7E6iV0eTeVxZlIS6JNhn5FFw=w960-h845-s-no-gm?authuser=0",
		"alt": "021",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczOmZf7ZvQGFKSV3vFXpTHCF-xAKHuow3FSDuTYWg80OHuOTvf1r19smtfaL95Y16LZPU12nAjuuTTWNJVtM1bwNcGP8xxxDN2frwB0LSPJT5OqCbRv28Y-bG5iwRjFBzMABiIfCV_mHgOPEeiuUtEo=w713-h951-s-no-gm?authuser=0",
		"alt": "022",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczO7z49kj6YM1XafRVbGlG4USjobb6spfdsT-4PxZ4QMtzuZ5UPQlSEGy1yCLVw2eoyIvGJ2VZ7FyXHGq5jN57Xs49lJyJiwrPgcfBZ52YL2tMs5N1BYK2vx3M_GBCBHk9wzGB3n-n68eG5yuopvy5A=w713-h951-s-no-gm?authuser=0",
		"alt": "023",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczMvA_cvmPhzt_CRKmXYz3gJrG9dwKL9v0Ym4sOXEuBXOeOqT19aADHveCaeCYH1gIxkjYFYTrDiDoJIFlDdpELrGs8YepGlMfVTUA90QPhR4Dx8E8tFiEgpYmJ6n3SGa8-2euayyH-Doocfv07We6o=w713-h951-s-no-gm?authuser=0",
		"alt": "024",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczOSoT2Fc4Zeer2rR1vMH55N5FGP-mmu7B-5iYk-75FJCRZGVtlG5xFBZk4Qx1A-R40a6MFixLdgf98uhhT2Zp4558jtKlITEOkgZH_3bDxhxIHRapES6hNNxpjQkfabojjd9GoAfeSl9xJlHNlmPCU=w713-h951-s-no-gm?authuser=0",
		"alt": "025",
		"caption": ""
	},
	{
		"src": "https://lh3.googleusercontent.com/pw/AP1GczMBOX-SogXmeXPiacYiwst51rIMOM3l9aEFdjcDCbNx-H2m-uo-paxFnp-SW0MuQDvRMd500kixAIK86JIeTHeR9iykBaK_GWNt44chGmkWo0WtTJhzsbBhL3I49Un9-M3otivQPzfcLLjrc2R3-9c=w1268-h951-s-no-gm?authuser=0",
		"alt": "026",
		"caption": ""
	}
]

// Populate the carousel
images.forEach(image => {
    const carouselSlideContent = `
        <div class="carousel-slide">
            <img src="${image.src}" alt="${image.alt}" class="carousel-slide-image">
            <caption>${image.caption}</caption>
        </div>
    `;
    document.getElementById('carousel').innerHTML += carouselSlideContent;
});