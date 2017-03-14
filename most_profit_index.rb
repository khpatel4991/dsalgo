class Profit

  attr_accessor :bp, :sp, :bp_index, :sp_index

  def initialize(bp_index=-1, bp=0, sp_index=-1, sp=0)
    @bp_index = bp_index || -1
    @bp = bp || 0
    @sp_index = sp_index || -1
    @sp = sp || 0
  end

  def apply_defaults(price, index)
    @bp_index = index
    @sp_index = index
    @bp = price
    @sp = price
  end

  def profit
    sp - bp
  end

  def new_sell_price(new_sp, index)
    @sp = new_sp
    @sp_index = index
  end

  def new_buy_price(new_bp, index)
    @bp = new_bp
    @bp_index = index
  end

  def uninitialized?
    bp_index == -1 && sp_index == -1
  end

  def indices
    [bp_index, sp_index]
  end

end

# [] => [-1, -1]

# [25] => [0, 0]

# [25, 27] => [0, 1]

# [25, 24] => [0, 0]

# [25, 27, 19, 23] => [2, 3]

# [25, 27, 26, 19, 32, 33] => [3, 5]

# [25, 26, 20, 19, 27, 28, 55, 21] => [3, 6]

def most_profit_indices(prices)
  cp = Profit.new
  pbp =  [-1, nil]
  prices.each.with_index do |tp, i|
    if cp.uninitialized?
      cp.apply_defaults(tp, i)
      next
    end
    if pbp[0] > -1 && tp - pbp[1] > cp.profit
      cp.new_buy_price(pbp[1], pbp[0])
      cp.new_sell_price(tp, i)
      next
    end
    if tp > cp.sp
      #Today's price is greater than current selling price
      cp.new_sell_price(tp, i)
    else
      #Today's price is lower than current selling price
      if tp < cp.bp
        #Prospective bp
        pbp = [i, tp] if pbp[0] == -1 || tp < pbp[1]
      end
    end
  end
  "#{cp.indices.inspect} with profit #{cp.profit} with prospective price #{pbp.inspect}"
end

puts most_profit_indices([])
puts most_profit_indices([25])
puts most_profit_indices([25, 27])
puts most_profit_indices([25, 24])
puts most_profit_indices([25, 27, 19, 23])
puts most_profit_indices([25, 27, 26, 19, 32, 33])
puts most_profit_indices([25, 26, 80, 19, 27, 28, 55, 21])