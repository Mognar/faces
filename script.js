document.addEventListener("DOMContentLoaded", () => {
    const imageGrid = document.getElementById('image-grid');
    const apiUrl = 'https://members-api.parliament.uk/api/Members/5345'; // Replace with your API URL
    const imageIds = [39,40,54,55,87,146,152,163,165,172,177,178,185,188,193,206,221,227,242,249,345,350,373,394,400,410,413,415,420,429,449,467,473,483,491,529,632,1171,1211,1383,1409,1440,1442,1444,1446,1447,1466,1482,1489,1491,1506,1508,1510,1512,1516,1521,1524,1533,1536,1541,1548,1560,1572,1576,1579,1587,1591,1593,3909,3912,3914,3924,3928,3935,3948,3952,3957,3966,3969,3973,3991,3997,4005,4008,4018,4020,4026,4029,4030,4031,4032,4038,4040,4046,4048,4051,4056,4061,4066,4074,4076,4077,4082,4083,4084,4088,4089,4095,4107,4108,4110,4118,4119,4124,4125,4126,4131,4138,4139,4212,4243,4245,4253,4263,4264,4267,4268,4269,4277,4316,4320,4356,4357,4358,4359,4360,4362,4366,4368,4370,4371,4382,4384,4389,4391,4394,4396,4397,4399,4403,4407,4409,4418,4425,4434,4436,4439,4441,4444,4449,4456,4457,4460,4462,4464,4471,4473,4474,4475,4479,4480,4483,4484,4491,4493,4494,4495,4500,4501,4503,4504,4505,4510,4511,4513,4514,4515,4518,4519,4520,4521,4523,4527,4569,4571,4572,4573,4591,4592,4595,4597,4598,4601,4602,4603,4607,4608,4610,4612,4613,4616,4617,4618,4620,4621,4623,4630,4631,4632,4634,4636,4637,4638,4641,4645,4647,4651,4653,4654,4656,4657,4658,4667,4671,4673,4676,4679,4682,4697,4698,4716,4735,4736,4739,4742,4743,4747,4753,4759,4764,4765,4769,4776,4777,4778,4779,4780,4781,4783,4785,4786,4787,4788,4790,4797,4798,4799,4803,4804,4805,4806,4811,4813,4818,4820,4822,4823,4824,4827,4828,4831,4844,4846,4849,4850,4853,4857,4858,4860,4861,4864,4869,4870,4871,4872,4873,4874,4918,4923,4932,4934,4938,4942,4943,4976,4979,4981,4993,4995,4998,5000,5001,5010,5011,5025,5028,5029,5030,5031,5032,5033,5034,5035,5036,5037,5038,5039,5040,5041,5042,5043,5044,5045,5046,5047,5048,5049,5050,5051,5052,5053,5054,5055,5056,5057,5058,5059,5060,5061,5062,5063,5064,5065,5066,5067,5068,5069,5070,5071,5072,5073,5074,5075,5076,5077,5078,5079,5080,5081,5082,5083,5084,5085,5086,5087,5088,5089,5090,5091,5092,5093,5094,5095,5096,5097,5098,5099,5100,5101,5102,5103,5104,5105,5106,5107,5108,5109,5110,5111,5112,5113,5114,5115,5116,5117,5118,5119,5120,5121,5122,5123,5124,5125,5126,5127,5128,5129,5130,5131,5132,5133,5134,5135,5136,5137,5138,5139,5140,5141,5142,5143,5144,5145,5146,5147,5148,5149,5150,5151,5152,5153,5154,5155,5156,5157,5158,5159,5160,5161,5162,5163,5164,5165,5166,5167,5168,5169,5170,5171,5172,5173,5174,5175,5176,5177,5178,5179,5180,5181,5182,5183,5184,5185,5186,5187,5188,5189,5190,5191,5192,5193,5194,5195,5196,5197,5198,5199,5200,5201,5202,5203,5204,5205,5206,5207,5208,5209,5210,5211,5212,5213,5214,5215,5216,5217,5218,5219,5220,5221,5222,5223,5224,5225,5226,5227,5228,5229,5230,5231,5232,5233,5234,5235,5236,5237,5238,5239,5240,5241,5242,5243,5244,5245,5246,5247,5248,5249,5250,5251,5252,5253,5254,5255,5256,5257,5258,5259,5260,5261,5262,5263,5264,5265,5266,5267,5268,5269,5270,5271,5272,5273,5274,5275,5276,5277,5278,5279,5280,5281,5282,5283,5284,5285,5286,5287,5288,5289,5290,5291,5292,5293,5294,5295,5296,5297,5298,5299,5300,5301,5302,5303,5304,5305,5306,5307,5308,5309,5310,5311,5312,5313,5314,5315,5316,5317,5318,5319,5320,5321,5322,5323,5324,5325,5326,5327,5328,5329,5330,5331,5332,5333,5334,5335,5336,5337,5338,5339,5340,5341,5342,5343,5344,5345,5346,5347,5348,5349,5350,5351,5352,5353,5354,5355,5356,5357,5358,5359,5360,5361,5362]; // Array of image IDs

 // Function to fetch image by ID from the API
    async function fetchImageById(id) {
        try {
            const response = await fetch(`${apiUrl}/${id}/Thumbnail`);
            if (!response.ok) {
                throw new Error(`Error fetching image with ID ${id}: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Function to fetch all images by their IDs
    async function fetchImages() {
        const imagePromises = imageIds.map(id => fetchImageById(id));
        try {
            const images = await Promise.all(imagePromises);
            displayImages(images.filter(image => image !== null));
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    }

    // Function to display images in the grid
    function displayImages(images) {
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url; // Adjust according to your API response
            imageGrid.appendChild(imgElement);
        });
    }

    // Fetch and display images on page load
    fetchImages();
});
