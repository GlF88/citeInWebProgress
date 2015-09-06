
	      $(document).ready(function() {
        var SoapBubbleMachineNumber1 = $('fn').BubbleEngine({
          particleSizeMin:            70,
          particleSizeMax:            90,
          particleSourceX:            $(window).width()/2,
          particleSourceY:            $(window).height()-400,
          particleAnimationDuration:  1100,
          particleDirection:          'left',
          particleAnimationDuration:  5000,
          particleAnimationVariance:  2000,
          particleScatteringX:        2050,
          particleScatteringY:        360,
          imgSource:                  'svg/case4.svg',
          gravity:                    -10
        });
        var SoapBubbleMachineNumber2 = $('fn').BubbleEngine({
          particleSizeMin:            70,
          particleSizeMax:            90,
          particleSourceX:            $(window).width()/2,
          particleSourceY:            $(window).height()-400,
          particleAnimationDuration:  1100,
          particleDirection:          'right',
          particleAnimationDuration:  5000,
          particleAnimationVariance:  2000,
          particleScatteringX:        2050,
          particleScatteringY:        360,
          imgSource:                  'svg/case3.svg',
          gravity:                    -20
        });
        var SoapBubbleMachineNumber3 = $('fn').BubbleEngine({
          particleSizeMin:            70,
          particleSizeMax:            90,
          particleSourceX:            $(window).width()/2,
          particleSourceY:            $(window).height()-400,
          particleAnimationDuration:  1100,
          particleDirection:          'left',
          particleAnimationDuration:  5000,
          particleAnimationVariance:  2000,
          particleScatteringX:        2050,
          particleScatteringY:        360,
          imgSource:                  'svg/case2.svg',
          gravity:                    -10
        });
        var SoapBubbleMachineNumber4 = $('fn').BubbleEngine({
          particleSizeMin:            70,
          particleSizeMax:            90,
          particleSourceX:            $(window).width()/2,
          particleSourceY:            $(window).height()-400,
          particleAnimationDuration:  1100,
          particleDirection:          'right',
          particleAnimationDuration:  5000,
          particleAnimationVariance:  2000,
          particleScatteringX:        2050,
          particleScatteringY:        365,
          imgSource:                  'svg/case1.svg',
          gravity:                    -17
        });
        var SoapBubbleMachineNumber5 = $('fn').BubbleEngine({
          particleSizeMin:            70,
          particleSizeMax:            90,
          particleSourceX:            $(window).width()/2,
          particleSourceY:            $(window).height()-400,
          particleAnimationDuration:  1100,
          particleDirection:          'left',
          particleAnimationDuration:  5000,
          particleAnimationVariance:  2000,
          particleScatteringX:        2050,
          particleScatteringY:        360,
          imgSource:                  'svg/triangle.svg',
          gravity:                    -20
        });
        var SoapBubbleMachineNumber6 = $('fn').BubbleEngine({
          particleSizeMin:            70,
          particleSizeMax:            90,
          particleSourceX:            $(window).width()/2,
          particleSourceY:            $(window).height()-400,
          particleAnimationDuration:  1100,
          particleDirection:          'right',
          particleAnimationDuration:  5000,
          particleAnimationVariance:  2000,
          particleScatteringX:        2050,
          particleScatteringY:        360,
          imgSource:                  'svg/squre.svg',
          gravity:                    -10
        });
        var SoapBubbleMachineNumber7 = $('fn').BubbleEngine({
          particleSizeMin:            70,
          particleSizeMax:            90,
          particleSourceX:            $(window).width()/2,
          particleSourceY:            $(window).height()-400,
          particleAnimationDuration:  1100,
          particleDirection:          'left',
          particleAnimationDuration:  5000,
          particleAnimationVariance:  2000,
          particleScatteringX:        2050,
          particleScatteringY:        365,
          imgSource:                  'svg/cicle.svg',
          gravity:                    -17
        });

        SoapBubbleMachineNumber1.addBubbles(2);
        SoapBubbleMachineNumber2.addBubbles(3);
        SoapBubbleMachineNumber3.addBubbles(2);
        SoapBubbleMachineNumber4.addBubbles(3);
        SoapBubbleMachineNumber5.addBubbles(2);
        SoapBubbleMachineNumber6.addBubbles(2);
        SoapBubbleMachineNumber7.addBubbles(2);
      });